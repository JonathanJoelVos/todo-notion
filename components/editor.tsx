import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'
import { FontBoldIcon, FontItalicIcon, OverlineIcon, LetterCaseCapitalizeIcon } from '@radix-ui/react-icons'
import { Heading1Icon, Heading2Icon, Heading3Icon } from 'lucide-react'
import Placeholder from '@tiptap/extension-placeholder'
import {  useState } from 'react'
import BubbleButton from './bubble-button'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Strike from '@tiptap/extension-strike'


export function Editor() {
  const [conteudo, setConteudo] = useState('')
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      // Bold,
      // Italic,
      // Strike,
      // Placeholder.configure({
      //   emptyEditorClass: 'is-editor-empty',
      //   placeholder: 'Pressione  "/" para ver as opções'
      // }),
      TaskList.configure({
        HTMLAttributes: {
          class: 'my-custom-class',
        },
      }),
      TaskItem.configure({
        nested: false,
        HTMLAttributes: {
          class: 'TaskItem-tiptap',
        }
      })
    ],
    content: `
    <ul data-type="taskList">
      <li data-type="taskItem" data-checked="true">Tópico concluído</li>
      <li data-type="taskItem" data-checked="false">And another one</li>
    </ul>
  `,
    editorProps: {
      attributes: {
        class: 'outline-none'
      },
    }
  })

  if (!editor) {
    return null
  }

  const pegarTexto = () => {
    const html = editor?.getHTML() ? editor?.getHTML() : ''
    setConteudo(html)
    console.log(encodeURIComponent(html))
  }

  return (
    <>
      <EditorContent className='prose w-full rounded-md border px-4 text-pink-500' editor={editor} />
      {
        editor && (
          <FloatingMenu
            editor={editor}
            shouldShow={({ state }) => {
              const { $from } = state.selection
              const currentLineText = $from.nodeBefore?.textContent

              return currentLineText === '/'
            }}
            className='flex flex-col gap-1 overflow-hidden rounded-lg border border-gray-300 bg-white px-1 py-2 shadow-xl shadow-black/20'
          >
            <button className='flex min-w-[280px] items-center gap-2 rounded p-1 hover:bg-gray-200'
              onClick={() => {
                editor.commands.deleteNode('paragraph')
                editor.chain().focus().insertContent('<p/>').run()
              }}
            >
              <div className='flex items-center justify-center rounded-md border border-gray-300 p-3'>
                <LetterCaseCapitalizeIcon className='h-8 w-8' />
              </div>
              <div className='flex flex-col text-left'>
                <span className='text-sm'>Text</span>
                <span className='text-xs text-gray-500'>Apenas texto simples</span>
              </div>
            </button>
            <button className='flex min-w-[280px] items-center gap-2 rounded p-1 hover:bg-gray-200'
              onClick={() => {
                editor.commands.deleteNode('paragraph')
                editor.chain().focus().insertContent('<h1/>').run()
              }}
            >
              <div className='flex items-center justify-center rounded-md border border-gray-300 p-3'>
                <Heading1Icon size={30} />
              </div>
              <div className='flex flex-col text-left'>
                <span className='text-sm'>Heading 1</span>
                <span className='text-xs text-gray-500'>
                  Título de seção grande
                </span>
              </div>
            </button>
            <button className='flex min-w-[280px] items-center gap-2 rounded p-1 hover:bg-gray-200' onClick={
              () => {
                editor.commands.deleteNode('paragraph')
                editor.chain().focus().insertContent('<h2/>').run()
              }}>
              <div className='flex items-center justify-center rounded-md border border-gray-300 p-3'>
                <Heading2Icon size={30} />
              </div>
              <div className='flex flex-col text-left'>
                <span className='text-sm'>Heading 2</span>
                <span className='text-xs text-gray-500'>
                  Título de seção médio
                </span>
              </div>
            </button>
            <button className='flex min-w-[280px] items-center gap-2 rounded p-1 hover:bg-gray-200'
              onClick={
                () => {
                  editor.commands.deleteNode('paragraph')
                  editor.chain().focus().insertContent('<h3/>').run()
                }}
            >
              <div className='flex items-center justify-center rounded-md border border-gray-300 p-3'>
                <Heading3Icon size={30} />
              </div>
              <div className='flex flex-col text-left'>
                <span className='text-sm'>Heading 3</span>
                <span className='text-xs text-gray-500'>
                  Título de seção pequeno
                </span>
              </div>
            </button>
          </FloatingMenu>
        )
      }

      {
        editor && (
          <BubbleMenu className='flex divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-xl shadow-black/20 ' editor={editor}>
            <BubbleButton
              onClick={() =>  editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}
            >
              <FontBoldIcon className='h-4 w-4' />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}
            >
              <FontItalicIcon className='h-4 w-4' />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive('strike')}
            >
              <OverlineIcon className='h-4 w-4' />
            </BubbleButton>
          </BubbleMenu>
        )
      }
    </>
  )
}
