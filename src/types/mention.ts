export interface User {
  id: number;
  value: string;
  avatar: string;
  link?: string;
}

export interface MentionModuleConfig {
  allowedChars: RegExp;
  mentionDenotationChars: string[];
  source: (searchTerm: string, renderList: (matches: User[], searchTerm: string) => void) => void;
  renderItem: (item: User) => string;
}