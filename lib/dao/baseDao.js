class BaseDao {
    constructor(dbModel) {
        this.Model = dbModel;
    }
    save(object) {
        return this.Model.create(object);
    }
    findOne(query, projection) {
        return this.Model.findOne(query, projection).exec();
    }
    find(query, projection) {
        return this.Model.find(query, projection).exec();
    }
    findOneAndUpdate(query, update, option) {
        return this.Model.findOneAndUpdate(query, update, option).exec();
    }
    findAndModify(query, update, option) {
        return this.Model.findAndModify(query, update, option).exec();
    }
    update(query, update, option) {
        if (!option)
            option = {};
        return this.Model.update(query, update, option).exec();
    }
    remove(query, option) {
        return this.Model.remove(query, option).exec();
    }
    findByIdAndRemove(query, option) {
        return this.Model.findByIdAndRemove(query, option).exec();
    }
    aggregate(aggPipe) {
        return this.Model.aggregate(aggPipe).exec();
    }
    findWithPeginate(query, options) {
        return this.Model.paginate(query, options);
    }
}

module.exports = BaseDao;