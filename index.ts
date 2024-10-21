// dependency injection**************************

class User {
  name: string;
  age: number;
}

interface UserRepo {
  getUser: () => User[];
  //other CRUD methods
}

class UserMongoDBRepo implements UserRepo {
  getUser(): User[] {
    console.log("Коннект из монго");
    return [{ age: 100, name: "Oldman из Монго" }];
  }
}

class UserMySQLDBRepo implements UserRepo {
  getUser(): User[] {
    console.log("Коннект из sql");
    return [{ age: 1, name: "Youngman из MySql" }];
  }
}

class UserService {
  userRepo: UserRepo;

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  filterByAge(minAge: number) {
    const users = this.userRepo.getUser();
    const filteredUser = users.filter(({ age }) => age >= minAge);
    console.log(filteredUser);
  }
}

const userService = new UserService(new UserMongoDBRepo());
// userService.filterByAge(15);

// dependency injection**************************

// singleton!*************************************
class Database {
  url: string;
  private static instance: Database;

  constructor(url: string) {
    if (Database.instance) {
      return Database.instance;
    }
    this.url = url;
    Database.instance = this;
  }
}

const db1 = new Database("123");
const db2 = new Database("abc");

console.log(db1.url);
console.log(db2.url);
// singleton!*************************************
