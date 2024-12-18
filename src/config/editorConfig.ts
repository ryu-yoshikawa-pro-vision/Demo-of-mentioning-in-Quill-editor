import { users } from '../data/users';
import { MentionModuleConfig } from '../types/mention';

export const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'link',
  'mention',
];

export const toolbarOptions = [
  [{ header: [1, 2, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['link', 'clean'],
];

export const mentionConfig: MentionModuleConfig = {
  allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
  mentionDenotationChars: ['@'],
  source: (searchTerm: string, renderList: (matches: any[], searchTerm: string) => void) => {
    const matches = users.filter(user =>
      user.value.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderList(matches, searchTerm);
  },
  renderItem: (item) => {
    const span = document.createElement('span');
    span.className = 'mention-item';
    span.innerHTML = `
      <img src="${item.avatar}" class="mention-avatar" alt="${item.value}" />
      <span class="mention-name">${item.value}</span>
    `;
    return span;
  },
  onSelect: (item, insertItem) => {
    const mention = {
      denotationChar: '@',
      id: item.id,
      value: item.value,
      avatar: item.avatar,
    };
    insertItem(mention);
  },
};