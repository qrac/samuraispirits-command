import { ComponentCommand, ComponentTags } from "../skills"
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
          <dt className="info-item-head">【真】</dt>
          <dd className="info-item-body">真スピリッツ専用</dd>
        </div>
        <div className="info-item">
          <dt className="info-item-head">【剣】</dt>
          <dd className="info-item-body">剣スピリッツ専用</dd>
        </div>
        <div className="info-item">
          <dt className="info-item-head">G不能</dt>
          <dd className="info-item-body">ガード不能攻撃</dd>
        </div>
        <div className="info-item">
          <dt className="info-item-head">
            <ComponentTags tags={[{ name: "怒", color: 2 }]} />
          </dt>
          <dd className="info-item-body">怒り時に強化</dd>
        </div>
        <div className="info-item">
          <dt className="info-item-head">
            <ComponentTags tags={[{ name: "素+", color: 4 }]} />
          </dt>
          <dd className="info-item-body">素手状態でも使用可</dd>
        </div>
      </dl>
      <p className="info-note">※コマンドはすべてキャラクターが右向きの場合</p>
    </div>
  )
}
