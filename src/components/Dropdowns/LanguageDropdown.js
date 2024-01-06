import React from 'react'
import Select from "react-select";
import { LANGUAGES } from 'https://mayank-singh-rajput.github.io/codeEditor/constants/languages';

export default function LangugeDropdown({language,setLanguage}) {
  return (
    <Select
      placeholder={language.label}
      options={LANGUAGES}
      value={language.value}
      className="w-full"
      onChange={(e) => {
        setLanguage(e);
      }}
		/>
  )
}
