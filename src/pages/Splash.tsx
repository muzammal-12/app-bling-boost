import React, { useEffect } from 'react';
import { Car, Wrench, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect to login after 3 seconds, or user can manually navigate
    const timer = setTimeout(() => {
      // Uncomment to auto-redirect: navigate('/auth/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-foreground to-secondary flex flex-col items-center justify-center p-6 text-center">
      {/* App Logo/Icon */}
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-full mb-8 shadow-xl">
        <Car className="h-16 w-16 text-white" />
      </div>

      {/* App Name */}
      <h1 className="text-4xl font-bold text-white mb-4">
        CarCare Pro
      </h1>

      {/* Tagline */}
      <p className="text-xl text-white/90 mb-12 max-w-md">
        Your smart companion for car maintenance, repairs, and diagnostics
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl">
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <Wrench className="h-8 w-8 text-white mx-auto mb-3" />
          <h3 className="font-semibold text-white mb-2">Smart Diagnostics</h3>
          <p className="text-sm text-white/80">
            AI-powered tire, part, and sound analysis
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <Shield className="h-8 w-8 text-white mx-auto mb-3" />
          <h3 className="font-semibold text-white mb-2">Maintenance Tracking</h3>
          <p className="text-sm text-white/80">
            Never miss scheduled maintenance again
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <Users className="h-8 w-8 text-white mx-auto mb-3" />
          <h3 className="font-semibold text-white mb-2">Shop Network</h3>
          <p className="text-sm text-white/80">
            Compare quotes from trusted mechanics
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4 w-full max-w-sm">
        <Button
          onClick={() => navigate('/onboarding')}
          size="lg"
          className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
        >
          Get Started
        </Button>
        <Button
          onClick={() => navigate('/auth/login')}
          variant="outline"
          size="lg"
          className="w-full border-white text-white hover:bg-white/10 font-semibold"
        >
          Sign In
        </Button>
      </div>

      {/* Skip Option */}
      <Button
        onClick={() => navigate('/')}
        variant="ghost"
        className="mt-8 text-white/70 hover:text-white hover:bg-white/10"
      >
        Continue as Guest
      </Button>

      {/* Loading Animation */}
      <div className="mt-8 flex space-x-2">
        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-150"></div>
        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  );
};

export default Splash;