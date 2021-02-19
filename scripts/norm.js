/**
 * 正規分布乱数関数
 * 参考:
 * https://qiita.com/sifue/items/e1dbfe671f42886e47d6
 * https://ja.wikipedia.org/wiki/ボックス=ミュラー法
 *
 * @param {number} m: 平均
 * @param {number} s: 分散
 * @return {number} ランダム値
 */
const normRand = (m, s) => {
  const a = 1 - Math.random(); // (0, 1)区間の乱数を生成
  const b = 1 - Math.random();
  const c = Math.sqrt(-2 * Math.log(a));

  // 元のコードでは確率1/2でsinとcosを選んでいたが、
  // 一つだけ必要、かつどちらを選んでも問題ないのでsinだけ返す
  return c * Math.sin(Math.PI * 2 * b) * s + m;
};
