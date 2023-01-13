import { _store, _retrieve, _remove, _flush } from "../services/storage.service";
import { of, from, BehaviorSubject } from "rxjs";

let instance;

export class SessionService {
  constructor() {
    this.store = {};
    this.subject = new BehaviorSubject({});
    this.session = this.subject;
  }

  set(key, data) {
    this.setOnly(key, data);
    this.dispatch(key, data);
  }

  setOnly(key, data) {
    this.store = Object.assign({}, this.store, {
      [key]: data,
    });
  }

  add(key, data) {
    return from(this.$add(key, data));
  }

  /** @deprecated @use {this.set} */
  addItem(key, data) {
    this.set(key, data);
  }

  /**
   * Updates the session listeners
   * @param {string} key
   * @param {object} data
   */
  dispatch(key, data) {
    // Logger.log("Dispatching: ", key);
    this.session.next({
      key,
      data,
    });
  }

  async $store(key, data) {
    this.setOnly(key, data);
    return _store(key, data);
  }

  store(key, value) {
    return from(this.$store(key, value));
  }

  async $add(key, data) {
    try {
      this.set(key, data);
      return _store(key, data);
    } catch (error) {
      console.log("Async store error", error);
    }
  }

  get(key) {
    return this.store[key];
  }

  async $pull(key) {
    try {
      return this.store[key];
    } catch (error) {
      console.warn("Async retrieve error", error);
    }
  }

  pull(key) {
    return of(this.$pull(key));
  }

  //   async $restore() {
  //     try {
  //         console.warn("Restoring Session");
  //       SESSION_KEYS.forEach(async (key) => {
  //         this.set(key, await _retrieve(key));
  //       });
  //       return;
  //     } catch (error) {
  //         console.warn("Problem restoring session from storage");
  //     }
  //   }

  /**
   * Async -Removes specified items from session and storage
   * @param {(String[]|string)} keys
   */
  $remove(keys) {
    this.removeFromSession(keys);

    if (Array.isArray(keys)) {
      keys.forEach((item) => {
        _remove(item);
        this.set(item, undefined);
      });
    }
  }

  /**
   * Removes specified items from session and storage
   * @param {(String[]|string)} keys
   */
  remove(keys) {
    return from(this.$remove(keys));
  }

  /**
   * Deletes items from session
   * @param {(String[]|string)} keys
   */
  removeFromSession(keys) {
    if (Array.isArray(keys)) {
      keys.forEach((key) => {
        this.removeFromSession(key);
      });
    } else {
      return this.store[keys] && delete this.store[keys];
    }
  }

  /**
   * Deletes the session from memory and persistent storage
   * Use this cautiously
   */
  async $reset() {
    try {
      await _flush();
      this.store = {};
      return;
    } catch (error) {
      console.warn("Reset failed!");
    }
  }

  async $setToken(token) {
    return this.$add("token", token);
  }

  setToken(token) {
    return from(this.$setToken(token));
  }

  async $setUser(data) {
    return this.$add("user", data);
  }

  setUser(data) {
    return from(this.$setUser(data));
  }

  /** @returns {string} */
  async token() {
    return await _retrieve("token");
  }

  /** @returns {boolean} the user login status */
  async isLoggedIn() {
    return (
      ((await _retrieve("user")) && (await _retrieve("token"))) !== undefined
    );
  }

  /** @returns {object} */
  get user() {
    return this.get("user");
  }

  /** @returns {boolean} */
  get firstRun() {
    return !!this.get("firstRun");
  }

  //   async $logout() {
  //     console.info("Logging out..");
  //     // await this.$add('logout', new Date().toISOString());
  //     return this.$remove(LOGIN_KEYS);
  //   }

  logout() {
    return from(this.$logout());
  }

  clearLocalStorage() {
    _flush();
  }

  /**
   * Creates or returns a singleton of the `SessionService`
   * @returns {SessionService}
   */
  static create() {
    if (!instance) {
      instance = new SessionService();
    }
    return instance;
  }

  static get session() {
    const session = SessionService.create();
    return session.session;
  }
}
