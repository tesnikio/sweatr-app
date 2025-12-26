const HostCTA = () => {
  return (
    <section className="py-24 bg-background" id="host">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sage to-sage/70" />
          
          {/* Pattern overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 py-20 px-8 md:px-16 lg:px-24">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-primary-foreground/20 text-primary-foreground text-sm font-medium rounded-full mb-6">
                Become a host
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground mb-6 leading-tight">
                Share your sauna,<br />
                earn while you relax
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-10 max-w-lg">
                Turn your private sauna into an income source. Join our community of hosts 
                and share the warmth with sauna enthusiasts around you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/become-host"
                  className="inline-flex justify-center items-center px-8 py-4 bg-primary-foreground text-primary rounded-full font-medium hover:bg-primary-foreground/90 transition-all"
                >
                  Start hosting
                </a>
                <a
                  href="/how-it-works"
                  className="inline-flex justify-center items-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/10 transition-all"
                >
                  Learn more
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-12 mt-14 pt-10 border-t border-primary-foreground/20">
                <div>
                  <p className="text-3xl font-serif font-medium text-primary-foreground">€420</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">Avg. monthly earnings</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-medium text-primary-foreground">2,400+</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">Active hosts</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-medium text-primary-foreground">4.9★</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">Host satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostCTA;
