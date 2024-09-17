const Reservation = require("./../models/Reserve");

const createReservation = async (req, res) => {
  const { name, date, email } = req.body;
  try {
    const dateExists = await Reservation.findOne({ date: date });
    const reservationUser = new Reservation({
        name: name,
        date: date,
        email: email,
      });
    if (dateExists) {
    return res.status(400).json({
        ok: false,
        msg: "La fecha seleccionada ya se encuentra reservada",
    });
    }
    await reservationUser.save();
    return res.status(200).json({
      ok: true,
      msg: "Haz reservado de manera exitosa",
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      msg: "Please contact to support",
    });
  }
};

module.exports = {
  createReservation,
};
