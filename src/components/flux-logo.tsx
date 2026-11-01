import type { IconProps } from "@/components/icons";

export function FluxLogo(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="38 38 73 73"
      aria-hidden="true"
      {...props}
    >
      <image href="/images/flux/flux-icon.svg" width="140" height="149" />
    </svg>
  );
}

export function FluxIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="50 50 50 50"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M79.0362 95.3835L74.908 97.7676L66.0398 92.6549L70.0672 90.3294L70.168 90.2707L79.0362 95.3835Z" />
      <path d="M94.8832 63.1743V67.973L83.7856 61.5662L67.955 70.7087V73.5382L61.3185 69.7077L54.9352 73.3905V63.1743L74.908 51.6431L94.8832 63.1743Z" />
      <path d="M94.8832 73.4332V86.2561L83.7879 92.6558H83.7739L72.6904 86.2561V73.4332L83.7879 67.0241L94.8832 73.4332Z" />
      <path d="M67.6995 78.8526V86.2205L61.3162 89.908L54.9352 86.2229V78.855L61.3185 75.1698L67.6995 78.8526Z" />
    </svg>
  );
}
