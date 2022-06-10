export default interface ICharacter {
  id: number | null;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
