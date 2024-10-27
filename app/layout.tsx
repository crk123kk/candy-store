import "@/app/ui/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="trancy-zh-CN" lang="en">
      <body>{children}</body>
    </html>
  );
}
