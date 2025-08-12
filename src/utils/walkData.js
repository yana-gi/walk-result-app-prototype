// Walk data structure and utility functions

export const WEATHER_OPTIONS = [
  { value: 'sunny', label: '晴れ' },
  { value: 'cloudy', label: '曇り' },
  { value: 'rainy', label: '雨' },
  { value: 'snowy', label: '雪' }
];

export const TIME_OF_DAY_OPTIONS = [
  { value: 'morning', label: '朝' },
  { value: 'afternoon', label: '昼' },
  { value: 'evening', label: '夕方' },
  { value: 'night', label: '夜' }
];

export const createWalkData = () => ({
  id: Date.now().toString(),
  date: new Date().toISOString(),
  distance: 0,
  duration: 0,
  steps: 0,
  calories: 0,
  weather: 'sunny',
  temperature: 20,
  timeOfDay: 'morning',
  courseName: '',
  thoughts: '',
  discoveries: '',
  dogCount: 0,
  catCount: 0
});

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const getWeatherLabel = (weather) => {
  return WEATHER_OPTIONS.find(option => option.value === weather)?.label || weather;
};

export const getTimeOfDayLabel = (timeOfDay) => {
  return TIME_OF_DAY_OPTIONS.find(option => option.value === timeOfDay)?.label || timeOfDay;
};

export const calculateScore = (walkData) => {
  const baseScore = Math.floor(walkData.distance * 100 + walkData.duration * 2 + walkData.steps * 0.01);
  const animalBonus = (walkData.dogCount + walkData.catCount) * 50;
  const thoughtBonus = walkData.thoughts.length > 0 ? 100 : 0;
  const discoveryBonus = walkData.discoveries.length > 0 ? 100 : 0;
  
  return baseScore + animalBonus + thoughtBonus + discoveryBonus;
};