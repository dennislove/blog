import { Title } from '../Title';
import { InforLeft } from './InforLeft';
import { ProgressBar } from './ProgressBar';
export const MBTI = () => {
  return (
    <div className=" mt-20">
      <Title name="MBTI" />
      <div className=" grid grid-cols-3 items-center gap-4 bg-slate-200 mt-10">
        <InforLeft />
        <div className=" col-span-2 py-4">
          <ProgressBar
            percentage={79}
            color="#5996B1"
            name2="Extraverted"
            name1="Introverted"
          />
          <ProgressBar
            percentage={68}
            color="#DCB051"
            name2="Intuitive"
            name1="Observant"
          />
          <ProgressBar
            percentage={53}
            color="#56A278"
            name2="Feeling"
            name1="Thinking"
          />
          <ProgressBar
            percentage={69}
            color="#826396"
            name2="Judging"
            name1="Prospecting"
          />
        </div>
      </div>
    </div>
  );
};
