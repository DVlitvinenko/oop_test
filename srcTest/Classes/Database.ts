class Database {
  private _url;
  private _port;
  private _username;
  private _password;
  private _tables: object[] = [];

  constructor(url, port, username, password) {
    this._url = url;
    this._port = port;
    this._username = username;
    this._password = password;
  }

  public createNewTables(table) {
    this._tables.push(table);
  }

  get url() {
    return this._url;
  }

  get port() {
    return this._port;
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  get tables() {
    return this._tables;
  }
}

export default Database;
