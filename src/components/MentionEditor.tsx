import React, { useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill-mention';
import { formats, toolbarOptions, mentionConfig } from '../config/editorConfig';
import '../styles/mentionEditor.css';

interface MentionEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MentionEditor: React.FC<MentionEditorProps> = ({ value, onChange }) => {
  const handleChange = useCallback((content: string) => {
    onChange(content);
  }, [onChange]);

  const modules = {
    toolbar: toolbarOptions,
    mention: mentionConfig,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">Rich Text Editor with Mentions</h1>
          <div className="mention-editor">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={handleChange}
              modules={modules}
              formats={formats}
              placeholder="Start typing and use @ to mention someone..."
              className="bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionEditor;