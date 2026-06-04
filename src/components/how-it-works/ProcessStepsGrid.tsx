type ProcessStep = {
  num: string;
  title: string;
  body: string;
};

type ProcessStepsGridProps = {
  steps: readonly ProcessStep[];
};

export function ProcessStepsGrid({ steps }: ProcessStepsGridProps) {
  return (
    <div className="process-steps">
      {steps.map((step) => (
        <div key={step.num} className="pstep">
          <span className="n">{step.num}</span>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </div>
      ))}
    </div>
  );
}
