import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select';
import { Separator } from 'components/separator';
import { RadioGroup } from 'components/radio-group';
import { useArticleParamsForm } from './useBehavior';
import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import {
  fontFamilyOptions,
  fontSizeOptions,
  fontColors,
  backgroundColors,
  contentWidthArr,
  ArticleStateType,
} from 'src/constants/articleProps';

type Props = {
  articleParams: (settings: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ articleParams }: Props) => {
  const {
    isMenuOpen,
    settingsState,
    onClick,
    handleClearForm,
    handleSubmitForm,
    updateFormState,
    divElementRef,
  } = useArticleParamsForm(articleParams);

  return (
    <div ref={divElementRef}>
      <ArrowButton onClick={onClick} isOpen={isMenuOpen} />
      <aside
        className={clsx(
          styles.container,
          isMenuOpen ? styles.container_open : ''
        )}>
        <form
          className={styles.form}
          onReset={handleClearForm}
          onSubmit={handleSubmitForm}>
          <Text as='p' size={31} weight={800} uppercase={true}>
            Задайте параметры
          </Text>

          <Select
            title='Шрифт'
            options={fontFamilyOptions}
            selected={settingsState.fontFamilyOption}
            onChange={(selected) =>
              updateFormState(selected, 'fontFamilyOption')
            }
          />

          <RadioGroup
            title='Размер шрифта'
            name='font-size'
            options={fontSizeOptions}
            selected={settingsState.fontSizeOption}
            onChange={(selected) => updateFormState(selected, 'fontSizeOption')}
          />

          <Select
            title='Цвет шрифта'
            options={fontColors}
            selected={settingsState.fontColor}
            onChange={(selected) => updateFormState(selected, 'fontColor')}
          />

          <Separator />

          <Select
            title='Цвет фона'
            options={backgroundColors}
            selected={settingsState.backgroundColor}
            onChange={(selected) =>
              updateFormState(selected, 'backgroundColor')
            }
          />

          <Select
            title='Ширина контента'
            options={contentWidthArr}
            selected={settingsState.contentWidth}
            onChange={(selected) => updateFormState(selected, 'contentWidth')}
          />

          <div className={styles.bottomContainer}>
            <Button title='Сбросить' type='reset' />
            <Button title='Применить' type='submit' />
          </div>
        </form>
      </aside>
    </div>
  );
};
