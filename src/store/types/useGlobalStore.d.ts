type FileData = {
  name: string;
  data: File | undefined;
  dataUrl: string | undefined;
  width: number;
  height: number;
};

type FileDefs = {
  file: FileData;
  setFile: (value: FileData) => void;
};

type StatusDefs = {
  status: string;
  setStatus: (value: string) => void;
};

type ActiveTabValues = "artwork" | "workshop";

type ActiveTabDefs = {
  activeTab: ActiveTabValues;
  setActiveTab: (value: ActiveTabValues) => void;
};

type GlobalStoreValues = FileDefs &
  StatusDefs &
  ActiveTabDefs &
  ArtworkShowcaseDefs;
