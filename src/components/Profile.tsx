import Image from 'next/image';

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col items-center space-y-8">
        {/* プロフィール画像とアイコン */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          {/* プロフィール画像 */}
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        {/* プロフィール情報 */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">D-Angelo</h1>
          <p className="text-xl text-gray-600">Software Engineer</p>
          
          <div className="space-y-2">
            <p className="text-gray-700">
              Star Wars をこよなく愛するソフトウェアエンジニアです。
              良きエンジニアリングとともに在らんこと
            </p>
          </div>

          {/* ソーシャルリンク */}
          <div className="flex justify-center space-x-4 mt-6">
            <a 
              href="https://github.com/d-angelo-2049" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://instagram.com/d_angelo_2049" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
              </svg>
            </a>
            <a 
              href="https://zenn.dev/dai_otsuka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <svg className="w-6 h-6" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M300.9 87.2H99.1c-6.6 0-12 5.4-12 12v67.5c0 6.6 5.4 12 12 12h72v57.8L64.6 324.3c-7.6 8.9-1.2 22.4 10.6 22.4h249.6c11.8 0 18.2-13.5 10.6-22.4L229 236.5v-57.8h72c6.6 0 12-5.4 12-12v-67.5c0-6.6-5.4-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
