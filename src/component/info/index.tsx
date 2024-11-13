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
          <dd className="info-item-body">
            斬りにあたるボタンどれでも（同時押しも含む）
          </dd>
        </div>
        <div className="info-item">
          <dt className="info-item-head">
            <ComponentCommand chars="蹴" />
          </dt>
          <dd className="info-item-body">
            蹴りにあたるボタンどれでも（同時押しも含む）
          </dd>
        </div>
        <div className="info-item">
          <dt className="info-item-head">
            <ComponentCommand chars="N" />
          </dt>
          <dd className="info-item-body">レバーをニュートラルに戻す</dd>
        </div>
        <div className="info-item">
          <dt className="info-item-head">G不能</dt>
          <dd className="info-item-body">ガード不能攻撃</dd>
        </div>
      </dl>
    </div>
  )
}
