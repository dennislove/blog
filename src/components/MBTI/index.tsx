import { Title } from '../Title';
import { InforLeft } from './InforLeft';
import { ProgressBar } from './ProgressBar';
export const MBTI = () => {
  return (
    <div className=" mt-20">
      <Title name="MBTI" />
      <div className=" grid lg:grid-cols-3 md:grid-cols-1 lg:grid-row-1 md:grid-row-2 items-center rounded-l-lg bg-slate-200 mt-10">
        <InforLeft />
        <div className=" col-span-2 py-4">
          <ProgressBar
            percentage={79}
            color="#5996B1"
            name1="Extraverted"
            name2="Introverted"
          />
          <ProgressBar
            percentage={68}
            color="#DCB051"
            name1="Intuitive"
            name2="Observant"
          />
          <ProgressBar
            percentage={53}
            color="#56A278"
            name1="Feeling"
            name2="Thinking"
          />
          <ProgressBar
            percentage={69}
            color="#826396"
            name1="Judging"
            name2="Prospecting"
          />
          <ProgressBar
            percentage={54}
            color="#f25e62"
            name1="Assertive"
            name2="Turbulent"
          />
        </div>
      </div>
    </div>
  );
};
