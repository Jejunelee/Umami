import { Row, Icon, Text, ThemeButton } from '@umami/react-zen';
import Image from 'next/image';
import { LanguageButton } from '@/components/input/LanguageButton';
import { PreferencesButton } from '@/components/input/PreferencesButton';

export function Header() {
  return (
    <Row as="header" justifyContent="space-between" alignItems="center" paddingY="3">
      <a href="https://umami.is" target="_blank">
        <Row alignItems="center" gap>
          <Icon>
            <Image src="/apple-touch-icon.png" alt="Jenafy Analytics Logo" width={24} height={24} />
          </Icon>
          <Text weight="bold">Jenafy Analytics</Text>
        </Row>
      </a>
      <Row alignItems="center" gap>
        <ThemeButton />
        <LanguageButton />
        <PreferencesButton />
      </Row>
    </Row>
  );
}
