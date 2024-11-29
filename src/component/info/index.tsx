import { ComponentCommand } from "../skills"
import "./index.css"

export function ComponentInfo() {
  return (
    <div className="info">
      <h2 className="info-title">特殊なアイコン・省略表記の説明</h2>
      <dl className="info-content">
        <div className="info-item">
          <dt className="info-item-head">
            <ComponentCommand chars="斬" />
          </dt>
          <dd className="info-item-body">斬りボタンどれでも（同時押し含む）</dd>
        </div>
        <div className="info-item">
          <dt className="info-item-head">
            <ComponentCommand chars="蹴" />
          </dt>
          <dd className="info-item-body">蹴りボタンどれでも（同時押し含む）</dd>
        </div>
        <div className="info-item">
          <dt className="info-item-head">
            <ComponentCommand chars="N" />
          </dt>
          <dd className="info-item-body">レバーニュートラル</dd>
        </div>
        <div className="info-item">
          <dt className="info-item-head">G不能</dt>
          <dd className="info-item-body">ガード不能攻撃</dd>
        </div>
      </dl>
      <p className="info-note">
        ※コマンドはすべてキャラクターが右向きの場合です
      </p>
    </div>
  )
}
