export interface Technology {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface EditorState {
  code: string;
  output: string;
}