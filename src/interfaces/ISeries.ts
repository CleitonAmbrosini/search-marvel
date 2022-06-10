export default interface ISeries {
  id: number | null;
  title: string;
  description: string | null;
  thumbnail: {
    path: string;
    extension: string;
  };
}
