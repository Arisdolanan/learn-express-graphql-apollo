const UserModel = require("../../models/mongo/user");

const resolver = {
  Query: {
    hello: () => "hello world",
    getAllUser: async () => {
      const data = await UserModel.find();
      return data;
    },
    async getUser(_, params) {
      const data = await UserModel.findById(params.id);
      return data;
    },
  },
  Mutation: {
    create: async (_, params) => {
      const create = new UserModel({
        name: params.user.name,
        email: params.user.email,
        phone: params.user.phone,
      });
      return await create.save();
    },
    update: async (_, { id, user }) => {
      const updated = await UserModel.findByIdAndUpdate(
        id,
        {
          $set: user,
        },
        { new: true }
      );
      return updated;
    },
    delete: async (_, params) => {
      const deleteUser = await UserModel.findByIdAndDelete(params.id);
      if (!deleteUser) {
        throw new Error("Error");
      }
      return deleteUser;
    },
  },
};

module.exports = resolver;
