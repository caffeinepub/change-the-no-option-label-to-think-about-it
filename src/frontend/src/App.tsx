import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingHearts } from '@/components/FloatingHearts';
import { AvoidButton } from '@/components/AvoidButton';

function App() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleYesClick = () => {
    setShowConfirmation(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-red-100">
      {/* Background animated hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="heart-float heart-1">
          <Heart className="w-8 h-8 text-rose-300 fill-rose-300" />
        </div>
        <div className="heart-float heart-2">
          <Heart className="w-6 h-6 text-pink-300 fill-pink-300" />
        </div>
        <div className="heart-float heart-3">
          <Heart className="w-10 h-10 text-red-300 fill-red-300" />
        </div>
        <div className="heart-float heart-4">
          <Heart className="w-7 h-7 text-rose-400 fill-rose-400" />
        </div>
        <div className="heart-float heart-5">
          <Heart className="w-9 h-9 text-pink-400 fill-pink-400" />
        </div>
        <div className="heart-float heart-6">
          <Heart className="w-5 h-5 text-red-400 fill-red-400" />
        </div>
      </div>

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          {!showConfirmation ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-rose-200">
              {/* Header with heart icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-rose-500 to-red-600 rounded-full p-6 shadow-lg animate-pulse">
                  <Heart className="w-12 h-12 text-white fill-white" />
                </div>
              </div>

              {/* Greeting */}
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-red-600">
                Dear Saanvi Dubey
              </h1>

              {/* Message */}
              <div className="space-y-4 mb-10">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                  You are really special to me. I know things haven't been easy but I wish you were here in India. 
                  I'd like to take you on a dinner date. Since you're far away, how about a virtual date with me? 
                  I'd really love that.
                </p>
              </div>

              {/* Question */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-8">
                  Will you be my Valentine?
                </h2>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    onClick={handleYesClick}
                    size="lg"
                    className="bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-bold text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <Heart className="w-6 h-6 mr-2 fill-white" />
                    Yes!
                  </Button>

                  <AvoidButton />
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-rose-200 text-center relative overflow-hidden">
              <FloatingHearts />
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-rose-500 to-red-600 rounded-full p-8 shadow-lg animate-bounce">
                    <Heart className="w-16 h-16 text-white fill-white" />
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-red-600">
                  Yay! You made my day ❤️
                </h2>

                <p className="text-xl md:text-2xl text-gray-700 mb-8">
                  I'm so happy! Can't wait for our virtual date!
                </p>

                {/* Polaroid Photo */}
                <div className="flex justify-center mb-8">
                  <div className="polaroid">
                    <div className="polaroid-inner">
                      <img 
                        src="/assets/2ca37304-4a4c-43ef-8982-01013addf984.jpeg" 
                        alt="Us together"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-2">
                  <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
                  <Heart className="w-8 h-8 text-pink-500 fill-pink-500 animate-pulse delay-100" />
                  <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-pulse delay-200" />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center">
        <p className="text-gray-600 flex items-center justify-center gap-2">
          © 2025. Built with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> using{' '}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 hover:text-rose-700 font-semibold underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
