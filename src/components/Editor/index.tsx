import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import CodeBlockLowLight from "@tiptap/extension-code-block-lowlight";
import { initialContent } from "./initialContent";
import { all, createLowlight } from "lowlight";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";

import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

import "highlight.js/styles/tokyo-night-dark.css";
import { BubbleButton } from "../BubbleButton";

const lowlight = createLowlight(all);

lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowLight.configure({
        lowlight,
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    onUpdate({ editor }) {
      console.log(editor.getJSON());
      console.log(editor.$doc);
    },
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      {editor && (
        <div className="">
          <div className="flex items-center justify-around">
            <button
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className={editor.isActive("taskList") ? "is-active" : ""}
            >
              Toggle task list
            </button>
            <button
              onClick={() =>
                editor.chain().focus().splitListItem("taskItem").run()
              }
              disabled={!editor.can().splitListItem("taskItem")}
            >
              Split list item
            </button>
            <button
              onClick={() =>
                editor.chain().focus().sinkListItem("taskItem").run()
              }
              disabled={!editor.can().sinkListItem("taskItem")}
            >
              Sink list item
            </button>
            <button
              onClick={() =>
                editor.chain().focus().liftListItem("taskItem").run()
              }
              disabled={!editor.can().liftListItem("taskItem")}
            >
              Lift list item
            </button>
          </div>
        </div>
      )}
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-indigo"
        editor={editor}
      />
      {editor && (
        <FloatingMenu
          editor={editor}
          className="bg-zinc-700 py-2 px-1 shadow-xl border border-zinc shadow-black/20 rounded-lg 
          overflow-hidden flex flex-col"
          shouldShow={({ state }) => {
            const { $from } = state.selection;

            const currentLineText = $from.nodeBefore?.textContent;

            return currentLineText === "/";
          }}
        >
          <button className="flex items-center gap-2 p-1 rounded min-w-[280] hover:bg-zinc-600">
            <img
              src="https://www.notion.so/images/blocks/text/en-US.png"
              alt="Text"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Text</span>
              <span className="text-xs text-zinc-400">
                Just start writing with plain text
              </span>
            </div>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className="flex items-center gap-2 p-1 rounded min-w-[280] hover:bg-zinc-600"
          >
            <img
              src="https://www.notion.so/images/blocks/header.57a7576a.png"
              alt="Page"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Heading 1</span>
              <span className="text-xs text-zinc-400">Big Section heading</span>
            </div>
          </button>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc shadow-black/20 rounded-lg overflow-hidden flex divide-x 
          divide-zinc-600"
          editor={editor}
        >
          <BubbleButton>
            Text
            <RxChevronDown />
          </BubbleButton>
          <BubbleButton>
            Comment
            <RxChatBubble />
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive("bold")}
            >
              <RxFontBold className="size-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic className="size-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive("strike")}
            >
              <RxStrikethrough className="size-4" />
            </BubbleButton>
          </div>

          <BubbleButton
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            data-active={editor.isActive("code")}
          >
            <RxCode className="size-4" />
          </BubbleButton>
        </BubbleMenu>
      )}
    </>
  );
}
