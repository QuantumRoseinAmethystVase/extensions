import { homedir } from "os";

import { BROWSERS_BUNDLE_ID } from "./useAvailableBrowsers";
import useChromiumBookmarks from "./useChromiumBookmarks";

const VIVALDI_BOOKMARKS_PATH = `${homedir()}/Library/Application Support/Vivaldi Snapshot`;

export default function useVivaldiBookmarks(enabled: boolean) {
  return useChromiumBookmarks(enabled, {
    path: VIVALDI_BOOKMARKS_PATH,
    browserName: "Vivaldi Snapshot",
    browserIcon: "vivaldisnapshot.png",
    browserBundleId: BROWSERS_BUNDLE_ID.vivaldiSnapshot,
  });
}
