function HomePage() {
  return (
    <div>
      Welcome to Next.js!
      {/* Removing styled jsx makes jest to work fine  */}
      <style jsx>{``}</style>
    </div>
  )
}

export default HomePage
