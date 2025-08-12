import { useState } from 'react';
import { WEATHER_OPTIONS, TIME_OF_DAY_OPTIONS, createWalkData } from '../utils/walkData';
import { Button, Input, Field, Label, Select, Textarea, Card } from './ui';

const WalkForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(createWalkData());

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value
    }));
  };

  const handleCounterChange = (type, increment) => {
    setFormData(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + increment)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      date: new Date().toISOString()
    };
    onSubmit(finalData);
  };

  return (
    <div className="min-h-screen game-ui">
      <div className="header-colored p-6 text-center">
        <h1 className="text-3xl font-bold text-white">
          🚶‍♂️ 散歩記録
        </h1>
      </div>
      <div className="max-w-md mx-auto p-4">
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 基本データ */}
          <Card title="📊 散歩データ">
            <div className="space-y-4">
              <Field>
                <Label>距離 (km)</Label>
                <Input
                  type="number"
                  name="distance"
                  value={formData.distance}
                  onChange={handleInputChange}
                  step="0.1"
                />
              </Field>
              
              <Field>
                <Label>時間 (分)</Label>
                <Input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                />
              </Field>
              
              <Field>
                <Label>歩数</Label>
                <Input
                  type="number"
                  name="steps"
                  value={formData.steps}
                  onChange={handleInputChange}
                />
              </Field>
              
              <Field>
                <Label>消費カロリー</Label>
                <Input
                  type="number"
                  name="calories"
                  value={formData.calories}
                  onChange={handleInputChange}
                />
              </Field>
            </div>
          </Card>

          {/* 環境データ */}
          <Card title="🌤️ 環境">
            <div className="space-y-4">
              <Field>
                <Label>天気</Label>
                <Select
                  value={formData.weather}
                  onChange={(value) => setFormData(prev => ({ ...prev, weather: value }))}
                  options={WEATHER_OPTIONS}
                />
              </Field>
              
              <Field>
                <Label>気温 (℃)</Label>
                <Input
                  type="number"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleInputChange}
                />
              </Field>
              
              <Field>
                <Label>時間帯</Label>
                <Select
                  value={formData.timeOfDay}
                  onChange={(value) => setFormData(prev => ({ ...prev, timeOfDay: value }))}
                  options={TIME_OF_DAY_OPTIONS}
                />
              </Field>
              
              <Field>
                <Label>コース名</Label>
                <Input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleInputChange}
                  placeholder="例：公園散歩コース"
                />
              </Field>
            </div>
          </Card>

          {/* 動物カウンター */}
          <Card title="🐾 動物発見カウンター">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl mb-2 min-h-[3rem] flex items-center justify-center">
                  {formData.dogCount > 0 ? '🐶'.repeat(formData.dogCount) : '🐶'}
                </div>
                <div className="text-lg text-gray-600 mb-4">{formData.dogCount}匹</div>
                <div className="flex justify-center gap-4">
                  <Button
                    type="button"
                    color="counter"
                    onClick={() => handleCounterChange('dogCount', -1)}
                  >
                    -1
                  </Button>
                  <Button
                    type="button"
                    color="counter"
                    onClick={() => handleCounterChange('dogCount', 1)}
                  >
                    +1
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2 min-h-[3rem] flex items-center justify-center">
                  {formData.catCount > 0 ? '🐱'.repeat(formData.catCount) : '🐱'}
                </div>
                <div className="text-lg text-gray-600 mb-4">{formData.catCount}匹</div>
                <div className="flex justify-center gap-4">
                  <Button
                    type="button"
                    color="counter"
                    onClick={() => handleCounterChange('catCount', -1)}
                  >
                    -1
                  </Button>
                  <Button
                    type="button"
                    color="counter"
                    onClick={() => handleCounterChange('catCount', 1)}
                  >
                    +1
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* 思考・発見記録 */}
          <Card title="💭 発見・思考記録">
            <div className="space-y-4">
              <Field>
                <Label>考えたこと</Label>
                <Textarea
                  name="thoughts"
                  value={formData.thoughts}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="散歩中に考えたことを記録..."
                />
              </Field>
              
              <Field>
                <Label>発見したもの</Label>
                <Textarea
                  name="discoveries"
                  value={formData.discoveries}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="新しい発見や気づきを記録..."
                />
              </Field>
            </div>
          </Card>

          {/* 送信ボタン */}
          <Button
            type="submit"
            color="game"
            className="px-8 py-4 text-xl"
          >
            🎯 散歩完了！結果を見る
          </Button>
        </form>
      </div>
    </div>
  );
};

export default WalkForm;