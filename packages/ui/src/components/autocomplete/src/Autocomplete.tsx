import classNames from 'classnames';
import { adpTheme, getRootWebUiTheme } from '@nayya-com/wardrobe';
import { ForwardedRef, forwardRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  HelperText,
  Label,
  RemoveButton,
  SelectWrapper,
  StyledAutocomplete,
} from './Autocomplete.styled';
import DropdownIndicator from './DropdownIndicator';
import LoadingIndicator from './LoadingIndicator';
import ValueContainer from './ValueContainer';
import { AutocompleteInstance, AutocompleteProps } from './types';

const Autocomplete = forwardRef(
  (props: AutocompleteProps, ref: ForwardedRef<AutocompleteInstance>) => {
    const {
      className,
      error,
      helperText,
      id,
      isDisabled,
      testId,
      warning,
      isLoading,
      searchFn,
      inputActionLabel,
      inputActionHandler,
      header,
    } = props;
    const rootWebUiTheme = getRootWebUiTheme();
    const [loading, setLoading] = useState(isLoading || false);

    const stateClasses = {
      error: error && !warning && !isDisabled,
      warning: warning && !error && !isDisabled,
      disabled: isDisabled,
    };

    const selectClass = classNames({ ...stateClasses }, className);

    const helperTextClass = classNames({ ...stateClasses });

    const handleSearch = async (inputValue: string) => {
      setLoading(true);
      const results = await searchFn(inputValue);
      setLoading(false);
      return results;
    };

    const showHandler = inputActionLabel && inputActionHandler !== undefined;

    return (
      <ThemeProvider theme={rootWebUiTheme}>
        <SelectWrapper data-testid={testId} className={selectClass}>
          {rootWebUiTheme.id === adpTheme.id && (
            <Label htmlFor={id}>{header}</Label>
          )}

          <StyledAutocomplete
            {...props}
            ref={ref}
            className={selectClass}
            loadOptions={handleSearch}
            isLoading={loading}
            loading={loading}
            loadingMessage={() => (loading ? 'Loading...' : '')}
            classNamePrefix="nayya-autocomplete"
            inputId={id}
            noOptionsMessage={({ inputValue }) =>
              inputValue.length ? 'No results found' : 'Type to search'
            }
            components={{
              DropdownIndicator,
              ValueContainer,
            }}
          />
          {loading && <LoadingIndicator className={selectClass} />}

          {showHandler && (
            <RemoveButton onClick={inputActionHandler}>
              {inputActionLabel}
            </RemoveButton>
          )}
        </SelectWrapper>
        {helperText && (
          <HelperText
            className={helperTextClass}
            variant="label3"
            testId={`${id}InputHelperText`}
          >
            {helperText}
          </HelperText>
        )}
      </ThemeProvider>
    );
  },
);

export default Autocomplete;
