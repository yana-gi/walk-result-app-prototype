import { 
  formatDate, 
  getWeatherLabel, 
  getTimeOfDayLabel 
} from '../utils/walkData';
import { Card } from './ui/catalyst';

const WalkDetail = ({ walkData, children }) => {
  return (
    <div className="space-y-4">
      {/* 基本データ */}
      <Card title="📊 散歩データ">
        <div className="space-y-3">
          <div className="text-lg text-gray-800">
            🏃‍♂️距離 <span className="font-bold">{walkData.distance} km</span>
          </div>
          
          <div className="text-lg text-gray-800">
            ⏰時間 <span className="font-bold">{walkData.duration} 分</span>
          </div>
          
          <div className="text-lg text-gray-800">
            👣歩数 <span className="font-bold">{walkData.steps.toLocaleString()} 歩</span>
          </div>
          
          <div className="text-lg text-gray-800">
            🔥カロリー <span className="font-bold">{walkData.calories} kcal</span>
          </div>
        </div>
      </Card>

      {/* 環境・コース情報 */}
      <Card title="🌤️ 環境・コース">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">天気:</span>
            <span className="text-gray-800 font-medium">{getWeatherLabel(walkData.weather)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">気温:</span>
            <span className="text-gray-800 font-medium">{walkData.temperature}℃</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">時間帯:</span>
            <span className="text-gray-800 font-medium">{getTimeOfDayLabel(walkData.timeOfDay)}</span>
          </div>
          
          {walkData.courseName && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">コース:</span>
              <span className="text-gray-800 font-medium">{walkData.courseName}</span>
            </div>
          )}
        </div>
      </Card>

      {/* 動物発見 */}
      {(walkData.dogCount > 0 || walkData.catCount > 0) && (
        <Card title="🐾 動物発見">
          <div className="text-center space-y-3">
            {walkData.dogCount > 0 && (
              <div>
                <div className="text-3xl">
                  {'🐶'.repeat(walkData.dogCount)}
                </div>
                <div className="text-sm text-gray-600">{walkData.dogCount}匹</div>
              </div>
            )}
            
            {walkData.catCount > 0 && (
              <div>
                <div className="text-3xl">
                  {'🐱'.repeat(walkData.catCount)}
                </div>
                <div className="text-sm text-gray-600">{walkData.catCount}匹</div>
              </div>
            )}
          </div>
          
          {(walkData.dogCount + walkData.catCount) > 0 && (
            <div className="text-center mt-4">
              <div className="text-yellow-300 font-bold">
                動物発見ボーナス: +{(walkData.dogCount + walkData.catCount) * 50} pt
              </div>
            </div>
          )}
        </Card>
      )}

      {/* 思考・発見 */}
      {(walkData.thoughts || walkData.discoveries) && (
        <Card title="💭 記録">
          <div className="space-y-4">
            {walkData.thoughts && (
              <div>
                <h3 className="text-gray-600 text-sm mb-2">考えたこと</h3>
                <div className="text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  {walkData.thoughts}
                </div>
              </div>
            )}
            
            {walkData.discoveries && (
              <div>
                <h3 className="text-gray-600 text-sm mb-2">発見したもの</h3>
                <div className="text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  {walkData.discoveries}
                </div>
              </div>
            )}
          </div>
          
          <div className="text-center mt-4">
            <div className="text-yellow-300 font-bold">
              記録ボーナス: +{(walkData.thoughts ? 100 : 0) + (walkData.discoveries ? 100 : 0)} pt
            </div>
          </div>
        </Card>
      )}

      {/* 日時 */}
      <Card className="p-4">
        <div className="text-center text-gray-600 text-sm">
          {formatDate(walkData.date)}
        </div>
      </Card>

      {/* 子コンポーネント（ボタンなど） */}
      {children}
    </div>
  );
};

export default WalkDetail;