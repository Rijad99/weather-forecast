interface NoDataProps {
    id: string;
    message: string;
}

export function NoData({ id, message }: NoDataProps) {
    return (
        <div id={id} className="flex justify-center">
            <p className="text-[var(--neutral-0)] text-(length:--fs-20) font-(weight:--fw-semi-bold)">{message}</p>
        </div>
    );
}
