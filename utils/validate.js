const Joi = require("joi");

module.exports = {
  bookValidate: (data) => {
    const dataSchema = Joi.object().keys({
      id: Joi.number().required().label("id buku"),
      name: Joi.string().required().label("Judul Buku"),
      type: Joi.string().required().label("Jenis Buku"),
    });

    return dataSchema.validate(data);
  },
};
