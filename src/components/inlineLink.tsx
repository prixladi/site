import Link from 'next/link';
import * as R from 'ramda';

type Props = {
  text: string;
  href: string;
  download?: string;
};

const InlineLink = ({ text, href, download }: Props) => (
  <Link passHref href={href}>
    {/* eslint-disable-next-line */}
    <a
      target={
        href.startsWith('https://') || href.startsWith('http://') || !R.isNil(download)
          ? '_blank'
          : undefined
      }
      download={download}
      className="text-red-600 underline hover:no-underline"
    >
      {text}
    </a>
  </Link>
);

export default InlineLink;
