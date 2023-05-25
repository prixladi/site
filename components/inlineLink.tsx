import Link from 'next/link';

type Props = {
  text: string;
  href: string;
  download?: string;
};

const InlineLink = ({ text, href, download }: Props) => (
  <Link
    passHref
    href={href}
    rel="noopener"
    target={
      href.startsWith('https://') || href.startsWith('http://') || Boolean(download)
        ? '_blank'
        : undefined
    }
    download={download}
    className="text-red-600 underline hover:no-underline font-bold"
  >
    {text}
  </Link>
);

export default InlineLink;
