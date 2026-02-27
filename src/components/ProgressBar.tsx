interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  color?: 'primary' | 'success' | 'danger';
}

const gradientMap = {
  primary: 'gradient-primary',
  success: 'gradient-success',
  danger: 'gradient-danger',
};

export default function ProgressBar({
  value,
  max,
  label,
  color = 'primary',
}: ProgressBarProps) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-sm mb-1.5">
          <span className="text-slate-300 font-medium truncate mr-2">{label}</span>
          <span className="text-slate-400 font-semibold tabular-nums whitespace-nowrap">
            {value}/{max} ({pct}%)
          </span>
        </div>
      )}
      <div className="progress-bar-track">
        <div
          className={`progress-bar-fill ${gradientMap[color]}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
