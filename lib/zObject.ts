import { z } from "zod";

const indexedInEnum = z.enum([
  "SCI",
  "SCOUPUS",
  "UGC_CARE",
  "PEER_REVIEWED",
  "NO_INDEXED",
]);
const bookTypeEnum = z.enum(["Book", "BookChapter"]);
const publishingMonthEnum = z.enum([
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);
export const journalSchema = z.object({
  nameOfJournal: z.string(),
  issnOrIssbnNo: z.string(),
  indexedIn: indexedInEnum,
  mainAuthor: z.boolean(),
});
export const conferenceSchema = z.object({
  nameOfConference: z.string(),
  indexedIn: indexedInEnum,
  mainAuthor: z.boolean(),
});
export const bookSchema = z.object({
  bookTitle: z.string(),
  publisherName: z.string(),
  titleWithPageNo: z.string(),
  editorName: z.string(),
  issnOrIssbnNo: z.string(),
  detailOfCoAuthors: z.string(),
  publishingMonth: publishingMonthEnum,
  publishingYear: z.string().min(4).max(4),
  type: bookTypeEnum,
});
