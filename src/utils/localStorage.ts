export interface localStorageProperties {
  // 读
  get<T, E>(
    key: string,
    // 默认值
    defaultValue: E,
    // 反序列化方法
    deserializer?: (value: string) => T
  ): T | E;
  // 写
  set<T>(
    key: string,
    // 储存值
    value: T,
    // 序列化方法
    serializer?: (value: T) => string
  ): void;
  // 删
  remove(key: string): void;

  // 数据前缀, 用于和其他数据做区分 (建议: 项目名)
  _DATA_PREFIX: string;
  // 版本号
  _DATA_VERSION: string;
  // 版本号标记 字符串
  _VERSION_MARK_STRING: string;
  // 检测版本号
  _checkDataVersion: (data: string) => boolean;
}

export const localStorage: localStorageProperties = {
  get(key, defaultValue, deserializer?) {
    if (!window) return defaultValue;

    let data = window.localStorage.getItem(key);

    // key 存在 && 检查版本号
    if (data && this._checkDataVersion(data)) {
      // 移除版本号信息
      data = data.replace(this._VERSION_MARK_STRING, "");

      let deserializedData;
      // 执行反序列化
      try {
        deserializedData = deserializer?.(data) ?? JSON.parse(data);
      } catch (error) {
        deserializedData = defaultValue;
      }

      return deserializedData;
    }

    return defaultValue;
  },

  set(key, value, serializer?) {
    // 执行序列化
    let serializedValue = serializer?.(value) ?? JSON.stringify(value);
    // 记录版本号
    let serializedData = `${this._DATA_PREFIX}=${this._DATA_VERSION};${serializedValue}`;

    window.localStorage.setItem(key, serializedData);
  },

  _DATA_PREFIX: "FoxPaper",
  _DATA_VERSION: "1.0.0",

  get _VERSION_MARK_STRING() {
    return `${this._DATA_PREFIX}=${this._DATA_VERSION};`;
  },

  remove(key) {
    return window.localStorage.removeItem(key);
  },

  _checkDataVersion(data) {
    return data.startsWith(this._VERSION_MARK_STRING);
  },
};
