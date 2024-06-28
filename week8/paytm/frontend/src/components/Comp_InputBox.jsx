export function InputBox({label, placeholder, type, onChange}){
    return <div className="py-2">
        <div className="text-sm font-medium text-gray-600 text-left py-1">
        {label}
      </div>
        <input type={type} onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
}