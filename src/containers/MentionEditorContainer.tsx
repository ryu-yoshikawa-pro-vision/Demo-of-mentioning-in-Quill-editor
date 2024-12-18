import React, { useState } from 'react';
import MentionEditor from '../components/MentionEditor';

const MentionEditorContainer: React.FC = () => {
  const [value, setValue] = useState('');

  return <MentionEditor value={value} onChange={setValue} />;
};

export default MentionEditorContainer;