import { calculateScore } from '../utils/walkData';
import { Button } from './ui/catalyst';
import WalkDetail from './WalkDetail';

const WalkResult = ({ walkData, onNewWalk, onViewHistory }) => {
  const score = calculateScore(walkData);
  
  const getScoreGrade = (score) => {
    if (score >= 1000) return { grade: 'S', color: 'text-yellow-300', emoji: '👑' };
    if (score >= 800) return { grade: 'A', color: 'text-purple-300', emoji: '⭐' };
    if (score >= 600) return { grade: 'B', color: 'text-blue-300', emoji: '🔥' };
    if (score >= 400) return { grade: 'C', color: 'text-green-300', emoji: '💪' };
    return { grade: 'D', color: 'text-gray-300', emoji: '🌱' };
  };

  const { emoji } = getScoreGrade(score);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center shadow-lg">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-4">{emoji}</div>
          <h1 className="text-4xl font-bold text-white mb-2">
            散歩完了！
          </h1>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-6">

        {/* 散歩データ表示 */}
        <WalkDetail walkData={walkData}>
          {/* アクションボタン */}
          <div className="space-y-4">
            <Button
              onClick={onNewWalk}
              variant="game"
              size="xl"
              className="w-full"
            >
              🚶‍♂️ 新しい散歩を記録
            </Button>
            
            <Button
              onClick={onViewHistory}
              variant="secondary"
              size="xl"
              className="w-full"
            >
              📚 散歩履歴を見る
            </Button>
          </div>
        </WalkDetail>
      </div>
    </div>
  );
};

export default WalkResult;