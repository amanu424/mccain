const User = require('../models/User');

class UserRepository {
    async createUser(data) {
        const user = new User(data);
        return await user.save();
    }

    async findUserById(id) {
        return await User.findById(id);
    }

    async findApprovedUsers() {
        return await User.find({ approvalStatus: "Accepted"});
    }

    async findPendingUsers() {
        return await User.find({ approvalStatus: "Pending"});
    }

    async deleteUser(id) {
        return await User.deleteOne({ _id: id})
    }

    async findAllUsers() {
        return await User.find();
    }

    async updateUser(id, updates) {
        return await User.findByIdAndUpdate(id, updates, { new: true });
    }
}

module.exports = new UserRepository();
