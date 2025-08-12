import { useState } from 'react';
import { formatDate } from '../utils/walkData';
import { Button, Card } from './ui/catalyst';
import WalkDetail from './WalkDetail';

const WalkHistory = ({ walks, onNewWalk, onDeleteWalk }) => {
  const [selectedWalk, setSelectedWalk] = useState(null);
  const [sortBy, setSortBy] = useState('date');

  const sortedWalks = [...walks].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date) - new Date(a.date);
      case 'distance':
        return b.distance - a.distance;
      default:
        return new Date(b.date) - new Date(a.date);
    }
  });


  const totalStats = walks.reduce((acc, walk) => ({
    totalDistance: acc.totalDistance + walk.distance,
    totalDuration: acc.totalDuration + walk.duration,
    totalSteps: acc.totalSteps + walk.steps,
    totalCalories: acc.totalCalories + walk.calories,
    totalDogs: acc.totalDogs + walk.dogCount,
    totalCats: acc.totalCats + walk.catCount,
  }), {
    totalDistance: 0,
    totalDuration: 0,
    totalSteps: 0,
    totalCalories: 0,
    totalDogs: 0,
    totalCats: 0,
  });

  if (selectedWalk) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 shadow-lg">
          <div className="max-w-2xl mx-auto flex items-center">
            <Button
              onClick={() => setSelectedWalk(null)}
              variant="secondary"
              size="sm"
              className="mr-4 text-white bg-white/20 hover:bg-white/30"
            >
              ← 戻る
            </Button>
            <h1 className="text-2xl font-bold text-white">散歩詳細</h1>
          </div>
        </div>
        <div className="max-w-md mx-auto p-4">

          <WalkDetail walkData={selectedWalk}>
            {/* 削除ボタン */}
            <Button
              onClick={() => {
                if (confirm('この散歩記録を削除しますか？')) {
                  onDeleteWalk(selectedWalk.id);
                  setSelectedWalk(null);
                }
              }}
              variant="secondary"
              className="bg-red-500/20 hover:bg-red-500/30 text-red-300 border-red-300/30"
            >
              🗑️ 記録を削除
            </Button>
          </WalkDetail>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen game-ui">
      <div className="header-colored p-6 text-center">
        <h1 className="text-3xl font-bold text-white">📚 散歩履歴</h1>
      </div>
      <div className="max-w-md mx-auto p-4">

        {walks.length === 0 ? (
          <div className="card-game rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🚶‍♂️</div>
            <p className="text-gray-800 text-lg mb-6">まだ散歩記録がありません</p>
            <Button
              onClick={onNewWalk}
              variant="game"
              size="md"
            >
              最初の散歩を記録
            </Button>
          </div>
        ) : (
          <>
            {/* 統計サマリー */}
            <div className="card-game rounded-2xl p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">📊 総合統計</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{walks.length}</div>
                  <div className="text-sm text-gray-600">散歩回数</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{totalStats.totalDistance.toFixed(1)}</div>
                  <div className="text-sm text-gray-600">総距離(km)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{Math.floor(totalStats.totalDuration / 60)}</div>
                  <div className="text-sm text-gray-600">総時間(h)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{totalStats.totalDogs + totalStats.totalCats}</div>
                  <div className="text-sm text-gray-600">動物発見数</div>
                </div>
              </div>
            </div>

            {/* ソート選択 */}
            <div className="card-game rounded-2xl p-4 mb-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-800 text-sm">並び順:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white text-gray-800 p-2 rounded-lg border border-gray-300 text-sm"
                >
                  <option value="date" className="bg-white text-gray-800">日付順</option>
                  <option value="distance" className="bg-white text-gray-800">距離順</option>
                </select>
              </div>
            </div>

            {/* 散歩記録リスト */}
            <div className="space-y-4 mb-6">
              {sortedWalks.map((walk) => {
                return (
                  <div
                    key={walk.id}
                    onClick={() => setSelectedWalk(walk)}
                    className="card-game rounded-2xl p-4 cursor-pointer hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">🚶‍♂️</div>
                        <div>
                          <div className="text-white font-bold">
                            {walk.distance}km • {walk.duration}分
                          </div>
                          <div className="text-white/70 text-sm">
                            {formatDate(walk.date)}
                          </div>
                          {walk.courseName && (
                            <div className="text-white/60 text-xs">
                              {walk.courseName}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        {(walk.dogCount > 0 || walk.catCount > 0) && (
                          <div className="text-white/60 text-xs">
                            🐕{walk.dogCount} 🐱{walk.catCount}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 新しい散歩ボタン */}
            <Button
              onClick={onNewWalk}
              color="game"
              className="mb-4 px-8 py-4 text-xl"
            >
              🚶‍♂️ 新しい散歩を記録
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default WalkHistory;