class User {
  private _username: string;
  private _password: string;
  private _id: number;

  constructor(username, password) {
    this.username = username;
    this.password = password;
    this._id = new Date().getTime();
  }
  public get username() {
    return this._username;
  }
  public set username(value) {
    this._username = value;
  }
  public get password() {
    return this._password;
  }
  public set password(value) {
    this._password = value;
  }
  public get id() {
    return this._id;
  }
}

export default User;
