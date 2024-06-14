import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
            target="_blank"
            rel="noreferrer"
          >
            Xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはNext.js
            AppRouterで作られたものです。ユーザーは自由に投稿をポストすることができます。
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              はじめる
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="py-8 md:py-12 lg:py-24 bg-slate-50">
        <div className="container max-w-[64rem] mx-auto space-y-6">
          <div className="text-center space-y-6">
            <h2 className="font-extrabold text-3xl md:text-6xl">
              サービスの特徴
            </h2>
            <p className="text-muted-foreground sm:text-lg sm:leading-7">
              このプロジェクトはモダンな技術スタックを使って作られたWebアプリケーションです。Next.js
              AppRouterやcontentlayerを利用してマークダウン形式でブログ投稿ができます。
            </p>
          </div>

          <div className="mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="currentColor"
                    d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js</h3>
                  <p className="text-sm text-muted-foreground">
                    AppRouter/Layouts/APIRoutesの技術を使用。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 128 128">
      <path fill="#df234f" d="M75.323.4c-.898 0-1.796.199-2.594.498c1.696 1.098 2.594 2.594 3.093 4.29c0 .2.1.4.1.599c0 .2.1.399.1.598c.1 2.894-.799 3.293-1.397 4.989c-.998 2.194-.698 4.589.499 6.484c.1.2.2.5.399.699c-1.297-8.38 5.686-9.578 6.983-12.172c.1-2.294-1.795-3.79-3.292-4.888C77.718.599 76.52.399 75.324.399ZM85.8 2.194c-.1.798 0 .599-.1.998c0 .299 0 .598-.1.898c-.1.299-.1.499-.2.798c-.1.3-.199.499-.299.798c-.1.2-.2.399-.3.698c-.099.1-.199.3-.298.4c-.1.1-.1.199-.2.299c-.2.2-.3.498-.499.698l-.598.599c-.2.2-.4.399-.599.498c-.698.5-1.496.898-2.195 1.397c-.2.2-.499.3-.698.499c-.2.2-.4.3-.599.499l-.598.598c-.2.2-.4.4-.5.699c-.199.2-.299.499-.498.698c-.1.3-.2.499-.399.798c-.1.3-.2.5-.3.798c-.1.3-.199.599-.199.798c0 .1 0 .3-.1.4c0 .1 0 .299-.1.399v1.396c0 .3 0 .5.1.798c0 .3.1.5.2.799s.2.498.3.798c.099.2.199.299.199.499l-7.583-2.894a53.157 53.157 0 0 0-3.79-.997c-.699-.2-1.397-.3-2.096-.5a61.927 61.927 0 0 0-5.986-.897h-.2c-1.995-.2-3.89-.3-5.885-.3c-1.497 0-2.894.1-4.29.2c-1.996.1-3.99.4-5.986.699l-1.497.299c-.997.2-1.995.399-2.993.698c-.499.1-.997.3-1.496.4c-.499.199-.998.398-1.397.598c-.399.2-.698.3-1.097.499c-.1 0-.1 0-.2.1c-.3.199-.598.299-.898.498c-.1 0-.2.1-.2.1c-.398.2-.698.4-.997.499c-.2.1-.499.2-.698.3c-.1.099-.2.099-.3.199c-.299.2-.598.299-.898.498c-.299.2-.598.3-.798.5c-.2.199-.499.299-.698.498c0 0-.1 0-.1.1c-.2.1-.399.3-.598.499l-.1.1c-.2.1-.3.299-.499.399c-.1 0-.1.1-.2.1c-.199.1-.299.299-.498.398c0 .1-.1.1-.1.1l-.599.599l-.1.1l-.598.598s0 .1-.1.1l-.499.499c-.1.1-.2.1-.2.2l-.598.598c0 .1-.1.1-.1.2l-.798.797l-.1.1c-.498.599-1.097 1.098-1.695 1.597c-.599.498-1.198.997-1.896 1.496s-1.297.898-1.995 1.297c-.699.399-1.397.698-2.095.998c-.699.299-1.397.598-2.095.798c-1.397.3-2.794.898-3.991.997c0-.498-.3-.399-.599-.399c-.299.1-.598.1-.798.2c-.3.1-.499.2-.798.3a2.96 2.96 0 0 0-.798.398c-.2.2-.499.3-.698.5c-.2.199-.5.398-.699.598c-.2.2-.499.399-.698.598c-.2.2-.4.4-.599.699c-.2.299-.399.498-.499.798c-.199.2-.299.499-.498.798c-.1.3-.3.598-.4.898l-.299.898c-.1.299-.1.498-.2.798v.1c-.1.3-.1.698-.1.898c.1-.1.1.1.1.299v.399c0 .2.1.399.1.598c.1.2.1.4.2.599c.099.2.199.399.398.599c.1.2.3.399.4.598c.199.2.398.4.598.499c.2.2.399.4.598.499c.798.698.998.898 1.996 1.496c.2.1.299.2.499.3h.1v.2c0 .298.1.498.199.797c.1.3.2.599.3.798l.298.599c0 .1.1.1.1.2c.1.299.3.498.4.698c.199.2.299.499.498.698l.599.599l.598.598h.1c.2.2.399.3.599.5s.499.299.698.398c.2.1.499.3.798.4c.2.1.4.199.698.199c0 0 .1 0 .1.1c.1 0 .3.1.4.1c-.1 1.795-.1 3.491.1 4.09c.298.698 1.795-1.397 3.192-3.691c-.2 2.294-.3 4.988 0 5.786c.399.798 2.294-1.796 4.09-4.59c23.345-5.387 44.695 10.775 46.99 33.622c-.4-3.592-4.79-5.587-6.884-5.088c-.998 2.394-2.694 5.587-5.387 7.482c.199-2.195.1-4.39-.3-6.584c-.698 2.993-2.095 5.886-4.09 8.28c-3.093.2-6.285-1.297-7.882-3.591c-.1-.1-.2-.3-.299-.4c-.1-.199-.2-.498-.3-.698c-.1-.2-.199-.499-.199-.698v-1.197c0-.2.1-.5.2-.699s.1-.499.2-.698c.099-.2.199-.499.398-.698c.599-1.597.599-2.894-.499-3.592l-.598-.3c-.1 0-.3-.099-.4-.099s-.199-.1-.299-.1c-.199-.1-.498-.1-.698-.2c-.2-.1-.499-.1-.698-.1c-.2 0-.5-.099-.699-.099h-.498c-.3 0-.5 0-.699.1c-.2 0-.499.1-.698.1c-.2.1-.499.1-.699.2c-.199.099-.399.199-.698.298l-.599.3c-7.682 4.988-3.092 16.76 2.096 20.152c-1.996.4-3.991.798-4.59 1.198l-.1.1c1.397.897 2.894 1.596 4.49 2.194c2.095.699 4.39 1.297 5.387 1.597c2.694.598 5.488.798 8.281.598c14.566-.998 26.538-12.171 28.732-26.737c.1.3.1.598.2.898c.1.598.2 1.197.3 1.895c.1.3.1.599.1.898v.1c0 .3.099.599.099.898c0 .399.1.698.1 1.097v4.19c0 .3-.1.5-.1.799v.299c0 .3-.1.599-.1.998c-.1.299-.1.598-.2.898v.1c-.1.299-.1.598-.199.897v.1c-.1.3-.1.599-.2.898v.1l-.299.898v.1c-.1.299-.2.698-.299.997c-.1.3-.2.599-.4.998c-.099.299-.199.698-.398.997c-.1.3-.3.599-.4.998c-.099.3-.299.599-.398.898c0 .1-.1.2-.1.2s0 .1-.1.1c-2.095 4.289-5.287 8.08-9.278 11.073c-.3.2-.499.4-.798.599c-.1.1-.2.1-.2.2c-.2.199-.499.299-.698.498l.1.2c.498-.1.898-.1 1.396-.2c.898-.1 1.696-.3 2.594-.499c.2 0 .5-.1.699-.2c.2 0 .299-.1.498-.1s.5-.099.699-.099c.2-.1.399-.1.598-.2c3.293-.797 6.485-1.895 9.578-3.192c-5.288 7.183-12.271 12.97-20.452 16.76c3.791-.299 7.582-.897 11.273-1.995a52.469 52.469 0 0 0 31.127-24.941c-1.396 7.582-4.39 14.865-8.879 21.25c3.193-2.095 6.086-4.59 8.78-7.283c7.382-7.682 12.27-17.559 13.867-28.034c1.098 5.188 1.497 10.575.998 15.863c23.844-33.222 1.995-67.641-7.183-76.72c0-.1-.1-.1-.1-.2c0 .4 0 .798-.1 1.198c-.1.798-.2 1.496-.3 2.194c-.199.699-.398 1.497-.598 2.195c-.2.699-.499 1.397-.798 2.095c-.3.699-.599 1.397-.998 1.996s-.798 1.297-1.197 1.895c-.399.599-.898 1.197-1.397 1.796c-.498.599-.997 1.097-1.596 1.696c-.3.3-.598.599-.997.798c-.3.2-.5.4-.799.698c-.598.5-1.197.898-1.895 1.297c-.599.4-1.297.799-1.995 1.098l-2.096.898c-.698.299-1.396.499-2.095.698c-.698.2-1.496.4-2.195.499c-.798.1-1.496.2-2.194.3c-.5 0-1.098.099-1.597.099c-.798 0-1.496-.1-2.194-.1c-.799-.1-1.497-.2-2.195-.3a7.874 7.874 0 0 1-2.195-.598c.698-.1 1.496-.1 2.195-.299c.798-.1 1.496-.3 2.195-.499c.698-.2 1.496-.399 2.095-.698l2.095-.898c.698-.3 1.297-.698 1.995-1.097c.599-.4 1.297-.898 1.896-1.297c.598-.5 1.197-.998 1.696-1.497c.598-.499 1.097-1.097 1.596-1.596c.499-.599.998-1.197 1.397-1.796c.1-.1.1-.2.2-.3c.298-.498.697-1.097.997-1.595a18.56 18.56 0 0 0 .997-1.996c.3-.698.6-1.397.799-2.095l.598-2.095c.1-.798.3-1.496.3-2.195c.1-.798.1-1.496.1-2.195c0-.498 0-1.097-.1-1.596c-.1-.798-.2-1.496-.3-2.195c-.1-.798-.3-1.496-.499-2.195c-.2-.698-.499-1.396-.698-2.095c-.3-.698-.599-1.396-.898-1.995c-.399-.698-.698-1.297-1.097-1.995c-.4-.599-.898-1.198-1.297-1.796c-.499-.599-.998-1.098-1.497-1.696c-.299-.3-.598-.599-.898-.798c-1.496-1.197-2.993-2.195-4.589-3.193c-.2-.1-.399-.2-.698-.3c-1.297-1.096-2.295-1.396-3.292-1.795Z"/>
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Nest.js</h3>
                  <p className="text-sm text-muted-foreground">
                    AppRouter/Layouts/APIRoutesの技術を使用。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 256 228">
                  <path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"/>
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">React.js</h3>
                  <p className="text-sm text-muted-foreground">
                    AppRouter/Layouts/APIRoutesの技術を使用。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 256 256">
                  <g fill="none">
                      <rect width="256" height="256" fill="#2B2E3A" rx="60"/>
                      <path fill="#9FEAF9" d="M100.768 70.772c-26.005-4.736-46.567.221-54.762 14.415c-6.115 10.592-4.367 24.635 4.24 39.646a2.669 2.669 0 0 0 4.462.342a2.674 2.674 0 0 0 .519-2.002a2.668 2.668 0 0 0-.355-.993c-7.752-13.522-9.261-25.641-4.247-34.326c6.808-11.791 25.148-16.213 49.187-11.835a2.667 2.667 0 0 0 .956-5.247Zm-36.999 72.307c10.515 11.555 24.176 22.394 39.756 31.388c37.723 21.78 77.883 27.601 97.675 14.106a2.662 2.662 0 0 0 1.152-1.711a2.661 2.661 0 0 0-1.165-2.756a2.665 2.665 0 0 0-2.992.061c-17.714 12.078-55.862 6.548-92.003-14.318c-15.114-8.726-28.343-19.222-38.478-30.36a2.672 2.672 0 0 0-1.849-.876a2.664 2.664 0 0 0-2.795 2.543a2.666 2.666 0 0 0 .699 1.923Z"/>
                      <path fill="#9FEAF9" d="M194.886 139.835c17.028-20.116 22.973-40.348 14.795-54.512c-6.017-10.423-18.738-15.926-35.645-16.146a2.666 2.666 0 0 0-1.92 4.514a2.67 2.67 0 0 0 1.851.819c15.205.198 26.165 4.939 31.096 13.48c6.792 11.765 1.49 29.807-14.248 48.399a2.656 2.656 0 0 0-.643 1.952c.027.352.124.694.285 1.008a2.654 2.654 0 0 0 1.568 1.328c.337.107.691.146 1.042.114a2.648 2.648 0 0 0 1.005-.296c.313-.164.589-.388.814-.66ZM151.125 71.66c-15.396 3.299-31.784 9.749-47.522 18.835c-38.942 22.483-64.345 55.636-60.817 79.675a2.658 2.658 0 0 0 1.038 1.775a2.659 2.659 0 0 0 2.98.155a2.662 2.662 0 0 0 1.217-1.657a2.68 2.68 0 0 0 .042-1.048c-3.133-21.344 20.947-52.769 58.207-74.281c15.267-8.815 31.135-15.06 45.972-18.239a2.669 2.669 0 0 0 1.674-4.14a2.677 2.677 0 0 0-1.74-1.106a2.669 2.669 0 0 0-1.051.031Z"/>
                      <path fill="#9FEAF9" d="M88.036 186.835c8.904 24.86 23.469 40.167 39.847 40.167c11.945 0 22.996-8.143 31.614-22.478a2.674 2.674 0 0 0 .327-2.033a2.66 2.66 0 0 0-3.256-1.957a2.677 2.677 0 0 0-1.642 1.242c-7.745 12.883-17.258 19.892-27.043 19.892c-13.605 0-26.596-13.652-34.825-36.63a2.663 2.663 0 0 0-1.364-1.552a2.663 2.663 0 0 0-2.966.432a2.678 2.678 0 0 0-.864 1.877c-.012.355.047.709.173 1.04h-.001Zm81.322-4.863c4.61-14.728 7.085-31.718 7.085-49.423c0-44.179-15.463-82.263-37.487-92.042a2.667 2.667 0 0 0-2.164 4.874c19.643 8.723 34.317 44.866 34.317 87.168c0 17.177-2.397 33.63-6.84 47.83a2.671 2.671 0 0 0 .816 2.874a2.675 2.675 0 0 0 2.971.313a2.67 2.67 0 0 0 1.303-1.594h-.001Zm50.224-2.612c0-7.049-5.714-12.763-12.763-12.763c-7.049 0-12.763 5.714-12.763 12.763c0 7.049 5.714 12.763 12.763 12.763c7.049 0 12.763-5.714 12.763-12.763Zm-5.333 0c0 .976-.192 1.942-.566 2.843a7.418 7.418 0 0 1-4.021 4.022a7.432 7.432 0 0 1-10.273-6.865a7.432 7.432 0 0 1 12.684-5.254a7.434 7.434 0 0 1 2.176 5.254ZM48.763 192.123c7.05 0 12.764-5.714 12.764-12.763c0-7.049-5.715-12.763-12.764-12.763c-7.048 0-12.763 5.714-12.763 12.763c0 7.049 5.715 12.763 12.763 12.763Zm0-5.333a7.431 7.431 0 0 1-5.254-12.684a7.431 7.431 0 0 1 12.684 5.254a7.429 7.429 0 0 1-7.43 7.43Z"/>
                      <path fill="#9FEAF9" d="M127.883 53.526c7.049 0 12.763-5.714 12.763-12.763c0-7.049-5.714-12.763-12.763-12.763c-7.049 0-12.763 5.714-12.763 12.763c0 7.049 5.714 12.763 12.763 12.763Zm0-5.333a7.43 7.43 0 1 1 0-14.861a7.43 7.43 0 0 1 0 14.861Zm1.949 93.382c-4.985 1.077-9.896-2.091-10.975-7.076a9.233 9.233 0 0 1 7.076-10.976c4.985-1.077 9.896 2.091 10.976 7.076c1.077 4.985-2.091 9.897-7.077 10.976Z"/>
                  </g>
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">Electron</h3>
                  <p className="text-sm text-muted-foreground">
                    AppRouter/Layouts/APIRoutesの技術を使用。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 256 225">
                    <path d="M228.747 65.588a38.198 38.198 0 0 0-1.62-1.62c-.55-.519-1.07-1.102-1.62-1.62c-.551-.52-1.07-1.102-1.62-1.62c-.551-.52-1.07-1.103-1.62-1.621c-.552-.519-1.07-1.102-1.62-1.62c-.552-.519-1.07-1.102-1.621-1.62c-.551-.52-1.07-1.102-1.62-1.62a85.744 85.744 0 0 1 25.632 59.819c0 53.695-54.505 97.377-121.519 97.377c-37.525 0-71.097-13.707-93.424-35.192l1.62 1.62l1.62 1.62l1.62 1.62l1.621 1.621l1.62 1.62l1.62 1.62l1.621 1.62c22.295 22.393 56.612 36.813 95.044 36.813c67.014 0 121.519-43.682 121.519-97.215c0-22.878-9.851-44.557-27.253-61.602Z"/>
                    <path fill="#FBF0DF" d="M234.937 114.066c0 49.288-50.779 89.243-113.418 89.243S8.101 163.354 8.101 114.066c0-30.558 19.443-57.552 49.32-73.56C87.3 24.498 105.9 8.101 121.52 8.101c15.62 0 28.97 13.384 64.097 32.405c29.878 16.008 49.32 43.002 49.32 73.56Z"/>
                    <path fill="#F6DECE" d="M234.937 114.066a70.222 70.222 0 0 0-2.593-18.73c-8.846 107.909-140.476 113.093-192.227 80.818a129.62 129.62 0 0 0 81.402 27.155c62.542 0 113.418-40.02 113.418-89.243Z"/>
                    <path fill="#FFFEFC" d="M77.87 34.576c14.484-8.684 33.733-24.984 52.658-25.017a30.104 30.104 0 0 0-9.009-1.458c-7.842 0-16.203 4.05-26.734 10.143c-3.662 2.139-7.453 4.504-11.472 6.967c-7.55 4.666-16.202 9.948-25.924 15.23c-30.85 16.69-49.288 44.201-49.288 73.625v3.856C27.74 48.542 63.417 43.261 77.87 34.576Z"/>
                    <path fill="#CCBEA7" d="M112.186 16.3a53.177 53.177 0 0 1-18.244 40.409c-.907.81-.194 2.365.972 1.912c10.92-4.245 25.665-16.948 19.443-42.58c-.259-1.459-2.17-1.07-2.17.259Zm7.356 0a52.626 52.626 0 0 1 5.217 43.65c-.388 1.134 1.005 2.106 1.783 1.166c7.096-9.073 13.286-27.09-5.25-46.534c-.94-.842-2.398.454-1.75 1.588v.13Zm8.944-.551a53.21 53.21 0 0 1 22.198 38.108a1.07 1.07 0 0 0 2.106.357c2.981-11.31 1.296-30.59-23.235-40.604c-1.296-.518-2.138 1.232-1.069 2.01v.129ZM68.666 49.45a54.894 54.894 0 0 0 33.928-29.164c.584-1.167 2.43-.713 2.14.583c-5.607 25.924-24.37 31.336-36.035 30.623c-1.232.032-1.2-1.685-.033-2.042Z"/>
                    <path d="M121.519 211.443C54.505 211.443 0 167.761 0 114.066c0-32.405 20.026-62.64 53.566-80.754c9.721-5.184 18.05-10.402 25.47-14.97c4.083-2.528 7.94-4.894 11.666-7.097C102.076 4.505 111.797 0 121.519 0c9.722 0 18.212 3.889 28.84 10.175c3.241 1.847 6.482 3.856 9.949 6.06c8.069 4.99 17.175 10.629 29.164 17.077c33.54 18.115 53.566 48.316 53.566 80.754c0 53.695-54.505 97.377-121.519 97.377Zm0-203.342c-7.842 0-16.203 4.05-26.734 10.143c-3.662 2.139-7.453 4.504-11.472 6.967c-7.55 4.666-16.202 9.948-25.924 15.23c-30.85 16.69-49.288 44.201-49.288 73.625c0 49.223 50.876 89.276 113.418 89.276c62.542 0 113.418-40.053 113.418-89.276c0-29.424-18.439-56.936-49.32-73.56c-12.25-6.48-21.81-12.573-29.554-17.369c-3.532-2.17-6.773-4.18-9.722-5.962c-9.818-5.833-16.98-9.074-24.822-9.074Z"/>
                    <path fill="#B71422" d="M144.365 137.722a28.938 28.938 0 0 1-9.463 15.263a22.068 22.068 0 0 1-12.962 6.092a22.165 22.165 0 0 1-13.383-6.092a28.938 28.938 0 0 1-9.333-15.263a2.333 2.333 0 0 1 2.593-2.625h39.988a2.333 2.333 0 0 1 2.56 2.625Z"/>
                    <path fill="#FF6164" d="M108.557 153.244a22.392 22.392 0 0 0 13.351 6.157a22.392 22.392 0 0 0 13.318-6.157a34.447 34.447 0 0 0 3.241-3.468a22.133 22.133 0 0 0-15.879-7.485a19.93 19.93 0 0 0-16.202 9.008c.745.681 1.393 1.33 2.171 1.945Z"/>
                    <path d="M109.076 150.684a17.37 17.37 0 0 1 13.577-6.74a19.443 19.443 0 0 1 12.962 5.476a51.225 51.225 0 0 0 2.139-2.495a22.684 22.684 0 0 0-15.263-6.254a20.61 20.61 0 0 0-15.846 7.647a30.882 30.882 0 0 0 2.43 2.366Z"/>
                    <path d="M121.81 161.021a24.045 24.045 0 0 1-14.42-6.481a30.85 30.85 0 0 1-10.077-16.365a3.889 3.889 0 0 1 .842-3.24a4.57 4.57 0 0 1 3.662-1.653h39.988a4.666 4.666 0 0 1 3.661 1.653a3.856 3.856 0 0 1 .81 3.24A30.85 30.85 0 0 1 136.2 154.54c-3.93 3.717-9 6-14.388 6.481Zm-19.993-23.98c-.519 0-.648.227-.68.292a26.864 26.864 0 0 0 8.846 14.16a20.188 20.188 0 0 0 11.828 5.672a20.35 20.35 0 0 0 11.828-5.606a26.896 26.896 0 0 0 8.814-14.161a.68.68 0 0 0-.648-.292l-39.988-.065Z"/>
                    <g transform="translate(53.792 88.4)">
                        <ellipse cx="117.047" cy="40.183" fill="#FEBBD0" rx="18.957" ry="11.147"/>
                        <ellipse cx="18.957" cy="40.183" fill="#FEBBD0" rx="18.957" ry="11.147"/>
                        <path d="M27.868 35.71a17.855 17.855 0 1 0-17.822-17.854c0 9.848 7.974 17.837 17.822 17.855Zm80.268 0A17.855 17.855 0 1 0 90.41 17.857c-.018 9.818 7.908 17.801 17.726 17.855Z"/>
                        <path fill="#FFF" d="M22.36 18.99a6.708 6.708 0 1 0 .064-13.416a6.708 6.708 0 0 0-.065 13.416Zm80.267 0a6.708 6.708 0 1 0-.065 0h.065Z"/>
                    </g>
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">bun.js</h3>
                  <p className="text-sm text-muted-foreground">
                    AppRouter/Layouts/APIRoutesの技術を使用。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background border p-2 rounded-lg">
              <div className="flex flex-col justify-between p-6 h-[180px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 256 330">
                    <path fill="#FF5B11" d="M134.129.029c.876-.113 1.65.108 2.319.662a1256.253 1256.253 0 0 1 69.573 93.427c16.094 24.231 29.788 49.851 41.082 76.862c18.037 48.108 8.65 89.963-28.16 125.564c-32.209 27.22-69.314 37.822-111.318 31.805c-50.208-10.237-84.332-39.28-102.373-87.133C.553 225.638-.993 209.736.614 193.51c2.676-27.93 9.302-54.877 19.878-80.838c4.407-10.592 10.15-20.31 17.228-29.154a381.88 381.88 0 0 1 16.565 21.203c2.44 2.55 4.98 4.98 7.62 7.289c20.155-40 44.23-77.325 72.225-111.981Z" opacity=".993"/>
                    <path fill="#FF9758" d="M129.49 53.7c24.314 28.2 46.29 58.238 65.93 90.114a187.318 187.318 0 0 1 15.24 33.13c8.338 32.804-.607 59.86-26.836 81.169c-25.367 17.85-53.196 23.15-83.488 15.902c-32.666-10.136-51.55-32.113-56.653-65.929c-1.238-10.662-.133-21.043 3.314-31.142a225.41 225.41 0 0 1 17.89-35.78l19.878-29.155a5509.508 5509.508 0 0 0 44.726-58.31Z"/>
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">hono.js</h3>
                  <p className="text-sm text-muted-foreground">
                    AppRouter/Layouts/APIRoutesの技術を使用。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
