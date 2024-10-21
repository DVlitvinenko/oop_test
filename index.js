// dependency injection**************************
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var UserMongoDBRepo = /** @class */ (function () {
    function UserMongoDBRepo() {
    }
    UserMongoDBRepo.prototype.getUser = function () {
        console.log("Коннект из монго");
        return [{ age: 100, name: "Oldman из Монго" }];
    };
    return UserMongoDBRepo;
}());
var UserMySQLDBRepo = /** @class */ (function () {
    function UserMySQLDBRepo() {
    }
    UserMySQLDBRepo.prototype.getUser = function () {
        console.log("Коннект из sql");
        return [{ age: 1, name: "Youngman из MySql" }];
    };
    return UserMySQLDBRepo;
}());
var UserService = /** @class */ (function () {
    function UserService(userRepo) {
        this.userRepo = userRepo;
    }
    UserService.prototype.filterByAge = function (minAge) {
        var users = this.userRepo.getUser();
        var filteredUser = users.filter(function (_a) {
            var age = _a.age;
            return age >= minAge;
        });
        console.log(filteredUser);
    };
    return UserService;
}());
var userService = new UserService(new UserMongoDBRepo());
// userService.filterByAge(15);
// dependency injection**************************
var Database = /** @class */ (function () {
    function Database(url) {
        if (Database.instance) {
            return Database.instance;
        }
        this.url = url;
        Database.instance = this;
    }
    return Database;
}());
var db1 = new Database("123");
var db2 = new Database("abc");
console.log(db1.url);
console.log(db2.url);
